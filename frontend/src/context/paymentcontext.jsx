import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import axios from "./axios";
import { UserData } from "./usercontext";
import { useNavigate } from "react-router-dom";


const Paymentcontext = createContext();


export const PaymentProvider = ({ children }) => {

    const { user, setuser } = UserData();
    const navigate = useNavigate();

    function loadRazorpay() {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };


    async function payit(plan) {
        try {
            if (plan === "Free") {
                await axios.post("/api/payment/verify-payment", { plan });
                setuser((prev) => ({
                    ...prev,
                    plan,
                    planExpiry: null
                }));
                toast.success("Switched to Free Plan");
                navigate("/premium");
                return;
            }

            const res = await loadRazorpay();
            if (!res) {
                toast.error("Razorpay SDK failed to load");
                return;
            }

            const { data } = await axios.post("/api/payment/create-order", { plan });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: data.order.amount,
                currency: "INR",
                name: "TuneHive",
                description: `${plan} plan Subscription`,
                order_id: data.order.id,
                handler:
                    async function (response) {
                        const verifyData = {
                            ...response,
                            plan,
                        };
                        await axios.post("/api/payment/verify-payment", verifyData);
                        setuser((prev) => ({
                            ...prev,
                            plan,
                            planExpiry:
                                plan === "Monthly" ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                                    : plan === "Yearly" ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                                        : null,
                        }));
                        toast.success(`Payment successful : ${plan} plan`);
                        navigate("/premium");
                    },
                prefill: {
                    name: user?.name,
                    email: user?.email,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on('payment.failed', function (response) {
                toast.error("Payment failed: " + response.error.description);
                navigate("/premium");
            });
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Payment failed");
        }
    }

    return (
        <Paymentcontext.Provider value={{ payit }}>
            {children}
        </Paymentcontext.Provider>
    )
}

export const PaymentData = () => useContext(Paymentcontext);