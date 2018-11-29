import React from "react"
import Link from "gatsby-link"
import Counter from "./counter"

export default () => <div style={{color: "tomato"}}>
                        <h1>Hello world page!</h1>
                        <p>So ugly syntax</p>
                        <Link to="/page-2">Page 2</Link>
                        <br/>
                        <Link to="/dir1/page-3">Page 3</Link>
                        <br />
                        <Counter color="green"/>
                    </div>
