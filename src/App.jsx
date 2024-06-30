import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      ]
    }
  }
  render() {
      return (
        <div className="wrapper">
          <Header/>
          <Items items={this.state.item}/>
          <Footer/>
        </div>
      )

  }
}

export default App
