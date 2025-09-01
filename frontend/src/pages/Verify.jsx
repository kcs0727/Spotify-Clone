import React from 'react'
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import { UserData } from "../context/usercontext";

export default function Verify() {

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { verifyuser } = UserData();
  const hasverify= useRef(false);

  useEffect(() => {
    if (token && !hasverify.current) {
      hasverify.current=true;
      verifyuser(token);
    }
  }, [token]);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    </div>
  )
}

