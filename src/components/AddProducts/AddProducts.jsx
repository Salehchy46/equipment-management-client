const AddProducts = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const delivery = form.delivery.value;
        const stock = form.stock.value;

        const newProduct = { name, image, category, description, price, rating, customization, delivery, stock };

        console.log(newProduct);

        //send data to the server side
        fetch('http://localhost:5000/equipments', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                    data('');
                }
            })
    }
    return (
        <div >
            <h2 className="text-3xl font-bold text-center m-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="grid lg:grid-cols-2 gap-4 text-center">
                    <div className="lg:ml-10 ml-2 w-full">
                        <label className="label mb-2">Item Name</label> <br />
                        <input type="text" className="input" name="name" placeholder="Item Name" /><br />
                        <label className="label my-2">Image</label><br />
                        <input type="text" className="input" name="image" placeholder="Image" /><br />
                        <label className="label my-2">Category Name</label><br />
                        <input type="text" className="input" name="category" placeholder="Category Name" /><br />
                        <label className="label my-2">Description</label><br />
                        <input type="text" className="input" name="description" placeholder="Description" /><br />
                        <label className="label my-2">Price</label><br />
                        <input type="number" className="input" name="price" placeholder="Price" /><br />
                    </div>
                    <div className="lg:mr-10 mr-2 w-full">
                        <label className="label mb-2">Rating</label><br />
                        <input type="number" className="input" name="rating" placeholder="Rating" /><br />
                        <label className="label my-2">Customization</label><br />
                        <input type="text" className="input" name="customization" placeholder="Customization" /><br />
                        <label className="label my-2">Processing Time</label><br />
                        <input type="text" className="input" name="delivery" placeholder="Processing Time" /><br />
                        <label className="label my-2">Stock Status</label><br />
                        <input type="number" className="input" name="stock" placeholder="Stock Status" /><br />

                        <input type="submit" className="btn btn-lg mt-8 px-20" value="Add Product" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;