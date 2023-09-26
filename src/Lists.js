
import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";
import styles from "./Lists.module.css";
import ListComponent from "./components/ListComponent";

const Lists = () => {

    const [listsTodo, setListTodo] = useState(     [])

    const fetchData =  async () => {
        let options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        }
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/list`

        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }
            let data = await response.json()

            setListTodo(data.records)
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [] )

    return (
        <>
            <Navigation />
            <div className={styles.mainContainer} >
                <h1>Your Lists</h1>
                <ListComponent list= {listsTodo}/>
            </div>
        </>
    )
}

export default Lists

Lists.propTypes = {

}