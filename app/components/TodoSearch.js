var React = require('react');

var TodoSearch = React.createClass({

    handleSearch:function () {
        var showCompleted = this.refs.showCompleted.checked;
        var SearchText = this.refs.SearchText.value;
        this.props.onSearch(showCompleted,SearchText);
        
    },

    render:function(){
        return(
            <div className='container__header'>
                <div>
                    <input type="search" placeholder="Search.." ref="SearchText" onChange={this.handleSearch}/>
                </div> 
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        show completed Todos
                    </label>
                </div>
            </div>
        )
        
    }
})

module.exports = TodoSearch;