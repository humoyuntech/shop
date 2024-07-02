import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      item: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'https://cdn.kitchen-time.ru/products/original/91f499962e8a1e839dda7f72234dfb66.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'https://static.tildacdn.com/tild6662-6461-4265-b034-373431393365/122.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '249.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'https://martfury-react.nouthemestf.vercel.app/static/img/products/variants/8d.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'https://betonpogreb.ru/wp-content/uploads/8/4/d/84dc12279f46af972b9b3fdf9c5ac4e4.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'https://ikea24.by/wp-content/uploads/2021/02/eggelstad-stul-belyy__0966583_pe809864_s5_800.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Шкаф',
          img: 'https://ubiwood.com/image/cache/catalog/s1200-1000x1000.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '89.99'
        },
        {
        id: 7,
        title: 'Книжная полка',
        img: 'https://m.media-amazon.com/images/I/61ZAClocNdL._AC_UF1000,1000_QL80_.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        category: 'chairs',
        price: '120.99'
      },
      {
        id: 8,
        title: 'Тумбочка',
        img: 'https://m.media-amazon.com/images/I/61Rhl4M8QuL.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        category: 'chairs',
        price: '120.99'
      },
      {
        id: 9,
        title: 'Комод',
        img: 'https://nixxa-mebel.ru/assets/images/catalog/gostinye/fiord/148183391460378659.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        category: 'chairs',
        price: '100.99'
      },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
      return (
        <div className="wrapper">
          <Header orders={this.state.orders}/>
          <Items items={this.state.item} onAdd={this.addToOrder} />
          <Footer/>
        </div>
      )

  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray) this.setState({orders: [...this.state.orders, item]})
  }
}

export default App
