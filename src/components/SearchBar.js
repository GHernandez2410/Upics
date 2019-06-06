import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

   /*  onInputChange(event) {
        this.setState({term: event.target.value.toUpperCase()})
    } */

    /* onInputClick(){
        console.log('Input was clicked');
    } */
    onFormSubmit = (event) => {
        event.preventDefault(); //para no recargar la pagina en el form siempre que se presiona enter
        this.props.cacona(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(event)=>this.setState({term: event.target.value.toUpperCase()})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;