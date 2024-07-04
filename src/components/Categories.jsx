import React, {Component} from "react";

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все',
                },
                {
                    key: 'chairs',
                    name: 'Стулья',
                },
                {
                    key: 'tables',
                    name: 'Столы',
                },
                {
                    key: 'sofa',
                    name: 'Диван',
                },
                {
                    key: 'light',
                    name: 'Свет',
                },
                {
                    key: 'wardrobe',
                    name: 'Шкаф',
                },
                {
                    key: 'bookshelf',
                    name: 'Книжная полка',
                },
                {
                    key: 'bedside-table',
                    name: 'Тумбочка',
                },
                {
                    key: 'dresser',
                    name: 'Комод',
                },
            ]
        }
    }
    render() {
        return(
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;