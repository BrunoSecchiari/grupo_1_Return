const productsController = {

    productCartEmpty: (req, res) => {
        res.render('./products/productCartEmpty');
    },

    productCartFull: (req, res) => {
        res.render('./products/productCartFull');
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail')
    },
    productList: (req, res) => {
        res.render ('./products/productList')
    }

}

module.exports = productsController;