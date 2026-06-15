const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")

const reviewController = require("../contollers/review.js");

//POST Review Route
router.post("/",
    isLoggedIn, 
    validateReview,
    reviewController.createReview);

//Delete Review route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    reviewController.destroyReview);

module.exports = router;


