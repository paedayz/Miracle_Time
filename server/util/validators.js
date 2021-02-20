const config = require('./config')

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  
const isEmpty = (string) => {
    if (string=== "") return true;
    else return false;
};

// const isPhoneNumber = (phoneNum) => {
//     var phoneno = /^\d{10}$/;
//     if(phoneNum.match(phoneno)) return true;
//     else return false
// }

exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
        errors.email = "Must be a valid email address";
    }

    if (isEmpty(data.password)) errors.password = "Must not be empty";

    if (isEmpty(data.avatarName)) errors.avatarName = "Must not be empty";

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false,
    };
    };

exports.validateLoginData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) errors.email = "Must not be empty";

    if (isEmpty(data.password)) errors.password = "Must not be empty";

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false,
    };
};

exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if(isEmpty(data.nickname)) {
        userDetails.errors = {nickname : 'Nickname is missing'}

    } else {
        userDetails.nickname = data.nickname;

        if (data.bio) userDetails.bio = data.bio;

        if (data.phone) userDetails.phone = data.phone;

        if (data.website) userDetails.website = data.website;

        if (data.imageName) userDetails.userImage = `https://firebasestorage.googleapis.com/v0/b/${config.firebaseConfig.storageBucket}/o/${data.imageName}?alt=media`;

    }

    return userDetails;
};