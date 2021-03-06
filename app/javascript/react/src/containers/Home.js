import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers:[],
      search_value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postFetch = this.postFetch.bind(this);
    this.handleButtonToggle=this.handleButtonToggle.bind(this)
    this.handleSecondButtonToggle=this.handleSecondButtonToggle.bind(this)
  }

  postFetch(formPayload) {
   fetch('/api/v1/beers', {
     method: 'POST',
     headers: {"Content-Type": 'application/json'},
     body: JSON.stringify(formPayload)
   })
   .then(response => response.json())
   .then(body => {
     this.setState({ beers: body })
   })
 }


  handleChange(event) {
    let value = event.target.value
    this.setState( { search_value: value })
    if (this.state.search_value.length > 1) {
      let formPayload = { search_value: this.state.search_value }
      this.postFetch(formPayload)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = { search_value: this.state.search_value }
    this.postFetch(formPayload)
  }



  handleButtonToggle(){
    if(this.state.buttonToggle){
      this.setState({ buttonToggle: false})
    } else {
      //fetch
      this.setState({ buttonToggle: true })
    }
  }

   handleSecondButtonToggle(){
     if(this.state.secondButtonToggle){
       this.setState({ secondButtonToggle: false })
     } else {
       //fetch
       this.setState({ secondButtonToggle: true })
     }
   }
  render(){
  let clicked=''
  if (this.state.buttonToggle){
    clicked='clicked'
  }
 let secondClicked =''
  if(this.state.secondButtonToggle){
    secondClicked='clicked'
  }

    return(

      <div className='grid-x'>
       <div className='header-image' >
        <div className="small-4 small-offset-4 cell">
          <div className='search-bar'>
            <input onChange={this.handleChange} value={this.state.search_value} type='search' placeholder='Search All Beers' />
          </div>
        </div>
          <div className='small-6 cell top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
