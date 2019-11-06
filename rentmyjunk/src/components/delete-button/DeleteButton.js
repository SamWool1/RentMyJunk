import React from 'react'

class DeleteButton extends React.Component {

    /**
     * @param {Integer} post_id The post ID to be deleted
     * @param {String} local_host_url URL for the server
     */
    constructor(post_id, local_host_url) {
        super();
        this.post_id = post_id;
        this.local_host_url = local_host_url;
    }

    /**
     * Makes generic xhr, defined by parameters.
     *
     * @param {String} type - Type of connection (POST, GET, etc)
     * @param {String} route - Route in database where request will be made
     * @param {FormData} data - Data to be sent to the database within xhr
     *
     * TODO Revise at some point in the future if needed
     */
    xhrSend(type, route, data) {
        // Create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        // Configure xhr by parameters
        xhr.open(type, this.local_host_url + route, false);

        // Send the request over the network
        xhr.send(data);

        // This will be called after the response is received
        xhr.onload = function () {
            if (xhr.status !== 200) {
                // analyze HTTP status of the response
                console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
            } else {
                // show the result
                console.log(`Done, got ${xhr.response.length} bytes`); // responseText is the server
                console.log(xhr.response);
            }
        };

        xhr.onerror = function () {
            console.log("Request failed");
            console.log(xhr.status);
        };

        console.log(xhr.response, "|", xhr.status);
        return xhr.response;
    }

    /**
     *  Calls xhr for deleting posts 
     */
    deletePost() {
        // Set up and call to delete post
        const data = new FormData();
        data.set('post_id', this.post_id);
        // var response = xhrSend('POST', 'api/deletepost', data);
        var response = 'test';

        // Redirect and return response
        this.history.pushState(null, '');
        return response;
    }

    render() {
        return <button onClick={() => console.log("test")}>Delete Post</button>
    }
}

export default DeleteButton
