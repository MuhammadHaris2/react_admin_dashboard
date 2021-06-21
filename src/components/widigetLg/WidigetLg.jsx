import React from 'react';
import './widigetLg.css'

const WidigetLg = () => {
    const Button = ({type})=>{
        return <button className={"widigetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widigetLg">
            
            <h3 className="widigetLgTitle">Latest transcations</h3>

            <table className="widigetLgTable">
                <tr className="widigetLgTr">
                    <th className="widigetLgTh">Customer</th>
                    <th className="widigetLgTh">Date</th>
                    <th className="widigetLgTh">Amount</th>
                    <th className="widigetLgTh">Status</th>
                </tr>

                <tr className="widigetLgTr">
                    <td className="widigetLgUser">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetLgImg" />
                    <span className="widigetLgName">Saleem</span>
                    </td>
                    <td className="widigetLgDate">
                    2 Jun 2021
                    </td>
                    <td className="widigetLgAmount">
                    $122.00
                    </td>
                    <td className="widigetLgStatus">
                    <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widigetLgTr">
                    <td className="widigetLgUser">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetLgImg" />
                    <span className="widigetLgName">Saleem</span>
                    </td>
                    <td className="widigetLgDate">
                    2 Jun 2021
                    </td>
                    <td className="widigetLgAmount">
                    $122.00
                    </td>
                    <td className="widigetLgStatus">
                    <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widigetLgTr">
                    <td className="widigetLgUser">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetLgImg" />
                    <span className="widigetLgName">Saleem</span>
                    </td>
                    <td className="widigetLgDate">
                    2 Jun 2021
                    </td>
                    <td className="widigetLgAmount">
                    $122.00
                    </td>
                    <td className="widigetLgStatus">
                    <Button type="Pending"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidigetLg

