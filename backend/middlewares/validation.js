import joi from 'joi';

export const signupvalidation= (req, res, next)=> {
    const Schema = joi.object({
        name: joi.string().min(4).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/).required()
            .messages({
                "string.pattern.base": "Password must contain at least one alphabet, one number and only @,$,!,%,*,?,& allowed"
            })
    })

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error?.details[0].message
        });
    }
    next();
}

export const albumvalidation= (req, res, next)=> {
    const Schema = joi.object({
        title: joi.string().min(3).max(50).required(),
        description: joi.string().min(5).max(100).required(),
    })

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error?.details[0].message
        });
    }
    next();
}

export const songvalidation= (req, res, next)=> {
    const Schema = joi.object({
        title: joi.string().min(3).max(50).required(),
        description: joi.string().min(5).max(100).required(),
        singer: joi.string().min(3).max(30).required(),
        album: joi.string().required() 
    })

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error?.details[0].message
        });
    }
    next();
}