import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import { setLaptops } from "../../redux/products/productsActions";


class LaptopsList extends Component {
  state = {}

  // componentDidMount() {
  //   this.getLaptops();
  // }

  // getLaptops = async () => {
  //   const response = await getAllAdvByCategory("laptops");
  //   if (response) {
  //     const laptops = Object.keys(response).map((key) => ({
  //       id: key,
  //       ...response[key],
  //     }));
  //     this.props.setLaptops(laptops);
  //   }
  // };

  render() {
    return (
      <div>
        <h1>LaptopList</h1>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    laptops: state.products.items.laptops,
  };
};


const mapDispatchToProps = { addToCart, setLaptops };

export default connect(mapStateToProps, mapDispatchToProps)(LaptopsList);

    // - переделайте компоненты PhoneList и LaptopList на классовые компоненты. Перенесите необходимую разметку.
    // - перенесите из компонета Main необходимые методы для загрузки данных getLaptops и getPhones. Вместо setState подставьте функцию, которая отвечает за изменение состояния в хранилище (actionCreators: setLaptops и setPhones). 
