var React = require('react');

var ListItem = require('./Listitem.jsx');

var ingredients = [{"id" : 1, "text" : "Bread"}, {"id" : 2, "text" : "Milk"}, {"id" : 3, "text" : "Rice"}];

var List = React.createClass({

    render : function(){
        
        var ListItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });
        console.log(ListItems);
        return (<ul>{ListItems}</ul>);
    }
});

module.exports = List;