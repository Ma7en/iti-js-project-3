/**
===========================================================
===========================================================
- fetch product by id 
**/
// Extract product ID from query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Fetch product details based on ID from query parameter
document.addEventListener("DOMContentLoaded", function () {
    function fetchProductDetails(productId) {
        const productsUrl = "https://dummyjson.com/products"; // Replace with your actual API endpoint
        fetch(`${productsUrl}/${productId}`)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(`All products: `, data);
                displayProductDetails(data);
            })
            .catch((error) => {
                console.log(`${error.message}`);
            });
    }

    function displayProductDetails(product) {
        const productDetailsDiv = document.querySelector(
            ".product-details .content"
        );
        if (!productDetailsDiv) {
            console.error("Product details element not found.");
            return;
        }
        productDetailsDiv.innerHTML += `
            <div class="prod">
                <figure class="card-banner">
                    <a>
                        <img src="${product.images[0]}" alt="${product.title}">
                    </a>
                </figure>

                <div class="cont">
                    <div>
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                        Price: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.price}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Rating: 
                                    </strong>
                                </td>
                                <td>
                                    
                                    <span>
                                    ${'<ion-icon name="star"></ion-icon>'.repeat(
                                        Math.floor(product.rating)
                                    )}
                                    ${
                                        product.rating % 1 !== 0
                                            ? '<ion-icon name="star-half-outline"></ion-icon>'
                                            : ""
                                    }
                                </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Stock: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.stock}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Return Policy: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.returnPolicy}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Shipping Information: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.shippingInformation}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Warranty Information: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.warrantyInformation}    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Weight: 
                                    </strong>
                                </td>
                                <td>
                                    ${product.weight}kg
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <div class="reviews">
                <h3>Reviews:</h3>
                ${product.reviews
                    .map(
                        (review) => `
                    <div class="review">
                        <div>
                            <img src="./images/product/avter-1.png" alt="${
                                review.reviewerName
                            }">
                            <p>
                                <strong>
                                    ${review.reviewerName}
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    (${review.reviewerEmail})
                                </strong>
                            </p>
                        </div>
                        
                        <div>
                            <p>
                                <strong>
                                    Comment: 
                                </strong>
                                ${review.comment}
                            </p>
                            <p class="star">
                                <strong>
                                    Rating: 
                                </strong>
                                <span>
                                    ${'<ion-icon name="star"></ion-icon>'.repeat(
                                        Math.floor(review.rating)
                                    )}
                                    ${
                                        review.rating % 1 !== 0
                                            ? '<ion-icon name="star-half-outline"></ion-icon>'
                                            : ""
                                    }
                                </span>
                            </p>
                            <p>
                                <strong>
                                    Date: 
                                <strong>    
                                ${new Date(review.date).toLocaleDateString()}
                            <strong></p>
                        </div>
                    </div>
                `
                    )
                    .join("")}
            </div>

            <div class="com">
                <form action="#">
                    <input type="text" name="" id="" placeholder="Enter your comment" required />
                    <button >Send</button>
                </form>
            </div>

        `;
    }

    // Fetch and display product details
    fetchProductDetails(productId);
});

// =================================================================
// =================================================================

// Extract product ID from query parameter
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");

// // Fetch product details based on ID from query parameter
// async function fetchProductDetails(productId) {
//     const productsUrl = "https://dummyjson.com/products"; // Replace with your actual API endpoint
//     try {
//         const response = await fetch(`${productsUrl}/${productId}`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const product = await response.json();
//         console.log(`1-->`, product);
//         displayProductDetails(product);
//     } catch (error) {
//         console.error("Error fetching product details:", error);
//     }
// }

// function displayProductDetails(product) {
//     const productDetailsDiv = document.querySelector(
//         ".product-details .content"
//     );
//     if (!productDetailsDiv) {
//         console.error("Product details element not found.");
//         return;
//     }
//     productDetailsDiv.innerHTML = `
//         <img src="${product.images[0]}" alt="${product.title}">
//         <h2>${product.title}</h2>
//         <p>${product.description}</p>
//         <p class="price">price: ${product.price}</p>

//         <p> rating: ${product.rating}</p>
//         <p>stock: ${product.stock}</p>

//     `;
// }

// // Fetch and display product details
// fetchProductDetails(productId);
