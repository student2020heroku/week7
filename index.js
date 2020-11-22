import express from 'express';
import bodyParser from 'body-parser';

import { createReadStream } from 'fs';
import crypto from 'crypto';
import http from 'http';
import m from 'mongoose';
import appSrc from './app.js';

const UserSchema = new m.Schema({
    login: {
      type: 'String'
    },
    password: {
      type: 'String'
    }
});


const app = appSrc(express, bodyParser, createReadStream, crypto, http, m, UserSchema);

try {
    await m.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(process.env.PORT ?? 4321);
} catch(e) {
    console.log(e.codeName);
}
