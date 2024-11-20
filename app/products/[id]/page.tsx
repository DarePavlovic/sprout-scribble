export default function Products({params}: {params: {id: string}}) {
    return(
        <div>
            <h1>Products</h1>
            <h1>Product {params.id}</h1>
        </div>

)}