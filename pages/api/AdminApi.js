//const adminApiBaseUrl = process.env.NEXT_PUBLIC_LOGIN_API_BASE_URL;

export const callEditService = async (request) => {
    console.log("Process",process.env);
    const adminApiBaseUrl = "http://localhost:8082"
    const editServiceUrl = adminApiBaseUrl+ "/service";
    return fetch(editServiceUrl, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {"Content-Type": "application/json"}
    })
        .then((response) => {
            return response;
        });
}

export const callFetchServicePageData = async () => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/service";
    return fetch(fetchServicePageUrl, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
        .then((response) => response.json());
}


export const callEditContact = async (request) => {
    console.log("request",request);
    const adminApiBaseUrl = "http://localhost:8082"
    const editServiceUrl = adminApiBaseUrl+ "/contact";
    return fetch(editServiceUrl, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {"Content-Type": "application/json"}
    }).then((response) => {
        console.log(response);
        if(response.ok)
        {return response.json()}
    });
}

export const callFetchContactPageData = async () => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/contact";
    return fetch(fetchServicePageUrl, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
        .then((response) => response.json());
}


export const callEditAboutUs = async (request) => {
    console.log("Process",request);
    const adminApiBaseUrl = "http://localhost:8082"
    const editServiceUrl = adminApiBaseUrl+ "/aboutus";
    return fetch(editServiceUrl, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {"Content-Type": "application/json"}
    })
        .then((response) => response.json());
}

export const callFetchAboutUsPageData = async () => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/aboutus";
    return fetch(fetchServicePageUrl, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
        .then((response) => response.json());
}

export const callSubmitimage = (formData) => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/aboutus-image/upload";
    return fetch(fetchServicePageUrl, {
        method: "POST",
        body : formData
    }).then((response) => {
        return response.json
    });
}

export const callcontactimage = (formData) => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/contact-image/upload";
    return fetch(fetchServicePageUrl, {
        method: "POST",
        body : formData
    }).then((response) => {
        return response.json
    });
}

export const callserviceimage = (formData) => {
    const adminApiBaseUrl = "http://localhost:8082"
    const fetchServicePageUrl = adminApiBaseUrl+ "/service-image/upload";
    return fetch(fetchServicePageUrl, {
        method: "POST",
        body : formData
    }).then((response) => {
        return response.json
    });
}