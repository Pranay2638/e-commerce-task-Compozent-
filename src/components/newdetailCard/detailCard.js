import "./detailCard.css";
import { useParams } from "react-router";

const DetailCard = ({ products = [] }) => {
    const { id } = useParams();
    const product = Array.isArray(products)
        ? products.find((product) => product.id === parseInt(id))
        : null;

    if (!product) {
        return (
            <div>
                <h1>Error: 401 :(</h1>
                <h3>Cannot find the Product!</h3>
            </div>
        );
    }

    return (
        <div className="card-detail">
            <div
                className="product-image"
                style={{
                    background: `url('${product.image}') center/cover no-repeat`,
                }}
            ></div>
            <div className="detail">
                <h1>{product.title}</h1>
                <p>{product.subTitle}</p>
                <p>Price : ${product.price}</p>
            </div>
        </div>
    );
};

export default DetailCard;
