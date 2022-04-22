import { ActionToHTTPMethod } from '@google-cloud/storage/build/src/file';
import httpStatus from 'http-status';
import { db } from '../db';

export const getAccounts = async(req: any, res: any, next: any) => {
    console.log("Called getAccounts method");

    try {
        db.collection('Users').get().then((snapshot) => {
            snapshot.docs.map((doc => doc.data));
            res.status(httpStatus.OK).json(snapshot.docs);
        })
    } catch (err) {
        console.log("Could not get accounts");
        next(err);
    }
}
export const getAccount = async(req: any, res: any, next: any) => {
    console.log("Called getAccount method");

    const { accountId } = req.params;

    try {
        const accRef = db.collection('Users').doc(accountId);
        const doc = await accRef.get();
        if (!doc.exists) 
            console.log("No such document!");
        else 
            console.log("Document found");   
        res.status(httpStatus.OK).json(doc.data());
    } catch (err) {
        console.log("Could not get account");
        next(err);
    }
}

export const createAccount = async(req: any, res: any, next: any) => {
    console.log("Called createAccount method");
    
    try {
        const {name, password, email, phone, creditCard, payment} = req.body, seals = 0;
        const toAdd = {
            name,
            password,
            email,
            phone,
            creditCard,
            payment,
            seals
        }
        const ret = await db.collection('Users').doc(email).set(toAdd, {merge:true});
        console.log("Created");
        const accRef = db.collection('Users').doc(email);
        const doc = await accRef.get();
        res.status(httpStatus.OK).json(doc.data());
    } catch(err) {
        console.log("Could not create new account");
        next(err);
    }
}

//Code nearly same as Create, may change if needed
export const updateAccount = async(req: any, res: any, next: any) => {
    console.log("Called updateAccount method");
    const { accountId } = req.params;
    
    try {
        //Check if account exists
        const accRef = db.collection('Users').doc(accountId);
        // const doc = await accRef.get();
        // if (!doc.exists) {
        //     console.log("Account does not exist!");
        // }
        // else {
        const toAdd = req.body;
        // update can be anything
        // const toAdd = {
        //     name,
        //     password,
        //     email,
        //     phone,
        //     creditCard,
        //     payment
        // }
        const ret = await db.collection('Users').doc(accountId).set(toAdd, {merge:true});
        console.log("Updated");
        // const accRef = db.collection('Users').doc(accountId);
        const doc = await accRef.get();
        // }
        res.status(httpStatus.OK).json(doc.data());
    } catch(err) {
        console.log("Could not update account");
        next(err);
    }
}


export const deleteAccount = async(req: any, res: any, next: any) => {
    console.log("Called deleteAccount method");
    const { accountId } = req.params;

    try {
        const accRef = db.collection('Users').doc(accountId);
        const doc = await accRef.get();
        if (!doc.exists) {
            console.log("Account does not exist!");
        }
        else {
            db.collection('Users').doc(accountId).delete();
            console.log("Deleted");
        }
        res.status(httpStatus.OK);
    } catch(err) {
        console.log("Could not delete account");
        next(err);
    }
}