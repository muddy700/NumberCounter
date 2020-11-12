import React, { Component } from 'react'
import './index.css'


export default class Counter extends Component {
    state = {
        counter: 0,
        byWord: 'Zero',
        clickRound : 0
    }

componentDidMount = () => {
        if (this.props.contents) {
            this.setState({
                counter: '',
                byWord: '',
                clickRound : 0
            })
        }

    }  

    changeValue = () => {
        if (this.state.clickRound === 0) {
            this.setState({

            })
            this.props.onStatus()
        } 
        else {
            this.componentDidMount()
        }
    }
    
    addValue = () => {
if(this.state.clickRound === 0){
    this.setState({
        counter: 0,
        byWord: 'Zero',
        clickRound : 1
    })
}
else {
            this.setState({ counter: this.state.counter + 1 });

        this.setState({
            byWord: this.numberToEnglish(this.state.counter + 1)
        });
    }
    }

    numberToEnglish = (n) => {

        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';

        /* Remove spaces and commas */
        string = string.replace(/[, ]/g, "");

        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'Zero';
        }

        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

        /* Split user argument into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }

        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }

        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {

            chunk = parseInt(chunks[i]);

            if (chunk) {

                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);

                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }

                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }

                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }

                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }

                /* Add 'and' string after units or tens integer if: */
                if (ints[1]) {

                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] && chunksLen) {
                        words.push(and);
                    }

                }

                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }

            }

        }

        return words.reverse().join(' ');

    }

    render() {
if(!this.props.status){

    return (
            <div className="countingBox">
                <h1>Welcome {this.props.name}.</h1>
            <h3>{this.state.clickRound === 0 ? "Click On The Right Button Bellow To Learn How To Count." : " "} </h3>
                <br />
                <h1>{this.state.counter}</h1>
                <br /> 
                <h1>{this.state.byWord.toUpperCase()}</h1>
                <br /> <br />
                <input type="button" className="button1" onClick={this.changeValue} value={this.state.clickRound === 0 ? "Logout" : "Reset"}/>
                <input type="button" className="button1" onClick={this.addValue} value={this.state.clickRound === 0 ? "Start Counting" : "Click to Increment"} />

            </div>

        )  }
        else{
            return null
        }
    }
}

