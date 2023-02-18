const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Please Enter product Name"],
        trim:true
    },
    condition_rating: {
        type:Number,
        default: 0
    },
    originalprice: {
        type:Number,
        required:[true, "Please Enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    clothtype: {
        type:String,
        required:[true, "Please Enter product type"]
    },
    images: [
        {
            public_id: {
                type:String,
                required:false
            },
            url: {
                type:String,
                required:false
            }
        }
    ],
    stock: {
        type:Number,
        required:[true, "Please Enter Product Count"],
        maxLength:[4,"Stock cannot exceed 4 characters"]
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);