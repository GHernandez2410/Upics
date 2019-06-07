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
                        <label>
                            <i className="camera retro icon"></i>
                            Upics image searcher
                        </label>
                        <div className="ui input icon"> 
                            <input 
                                type="text" 
                                value={this.state.term} 
                                onChange={(event)=>this.setState({term: event.target.value.toUpperCase()})}
                                placeholder="Search some pics..." />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;