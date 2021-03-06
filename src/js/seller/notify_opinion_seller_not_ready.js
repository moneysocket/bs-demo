// Copyright (c) 2020 Jarret Dyrbye
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php

const BinUtl = require('moneysocket').BinUtl;
const MoneysocketNotification = require('moneysocket').MoneysocketNotification;
let NOTIFICATION_SUBCLASSES = require('moneysocket').NOTIFICATION_SUBCLASSES;

class NotifyOpinionSellerNotReady extends MoneysocketNotification {
    constructor(request_reference_uuid) {
        super("NOTIFY_OPINION_SELLER_NOT_READY", request_reference_uuid);
    }

    cryptLevel() {
        return "AES";
    }

    static castClass(msg_dict) {
        var c = new NotifyOpinionSellerNotReady(
            msg_dict['request_reference_id']);
        Object.keys(msg_dict).forEach(key => {
            c[key] = msg_dict[key];
        });
        return c;
    }

    static checkValidMsgDict(msg_dict) {
        return null;
    }
}

NOTIFICATION_SUBCLASSES['NOTIFY_OPINION_SELLER_NOT_READY'] = (
    NotifyOpinionSellerNotReady);

exports.NotifyOpinionSellerNotReady = NotifyOpinionSellerNotReady;
