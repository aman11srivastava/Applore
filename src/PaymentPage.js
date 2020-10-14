import React, { Component } from 'react'
import './PaymentPage.css'

class PaymentPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardNo: [],
             cvv: [],
             month: [],
             year: [],
             name:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);    
        this.handlePayment = this.handlePayment.bind(this);
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNumbers = (e) => {
        e.preventDefault();
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({
               [e.target.name]: e.target.value
            })
        }
    }

    handlePayment = (e) => {
        e.preventDefault();
        alert('Payment Successfull')
        this.setState({
            cardNo: '',
            cvv: '',
            month: '',
            year: '',
            name:''
        })
    }
    
    render() {
        return (
            <div className="payment-section">
                <form className="payment-form">
                <h1>Enter Payment Details</h1>
                    <label>Enter your 16 digit card number</label>
                    <br></br>
                    <input
                        className="big"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        value={this.state.cardNo}
                        name="cardNo"
                        onChange={this.handleNumbers}
                    />
                    <br/>
                    <label>Enter the Card holders Name</label>
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        className="big"
                        placeholder="Eg.   'John Doe'"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        placeholder="MM"
                        name="month"
                        className="numbers"
                        value={this.state.month}
                        onChange={this.handleNumbers}
                    />
                    <input
                        name="year"
                        placeholder="YY"
                        className="numbers"
                        value={this.state.year}
                        onChange={this.handleNumbers}
                    />
                    <input
                        name="cvv"
                        placeholder="CVV"
                        className="numbers"
                        value={this.state.cvv}
                        onChange={this.handleNumbers}
                    />
                    <br/>
                    <button
                        onClick={this.handlePayment}
                        className="btn btn-success"
                    >
                        Make Payment
                    </button>
                </form>
            </div>
        )
    }
}

export default PaymentPage
