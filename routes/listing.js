const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer  = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../contollers/listing.js");

router.route("/")
.get((listingController.index))
.post(
    isLoggedIn,
    upload.single('image'),
    validateListing,
    (listingController.createListing)    
);

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm );

router.route("/:id")
.get(listingController.showListing)
.put(
    isLoggedIn,
    isOwner,
    upload.single('image'),
    validateListing,
    listingController.updateListing
)
.delete(
    isLoggedIn,
    isOwner,
    listingController.destroyListing
);  

//Edit Route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    listingController.renderEditForm);

module.exports = router;