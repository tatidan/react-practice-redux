import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import { setPhones } from "../../redux/products/productsActions";

class PhoneList extends Component {
  state = {}
  
  // componentDidMount() {
  //   this.getPhones();
  // }
  // getPhones = async () => {
  //   const response = await getAllAdvByCategory("phones");

  //   if (response) {
  //     const phones = Object.keys(response).map((key) => ({
  //       id: key,
  //       ...response[key],
  //     }));

  //     this.props.setPhones(phones);
  //   }
  // }

  
    render() {
      return (
        <div>
          <h1>PhoneList</h1>
        </div>
      );
    }
  };


  const mapStateToProps = (state) => {
    return {
      laptops: state.products.items.phones,
    };
  };

const mapDispatchToProps = { addToCart, setPhones };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);

    // - переделайте компоненты PhoneList и LaptopList на классовые компоненты. Перенесите необходимую разметку.
    // - перенесите из компонета Main необходимые методы для загрузки данных getLaptops и getPhones. Вместо setState подставьте функцию, которая отвечает за изменение состояния в хранилище (actionCreators: setLaptops и setPhones). 
