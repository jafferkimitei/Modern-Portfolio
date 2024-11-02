import { PageInfo } from "../typings";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPageInfo = async() => {
    const res = await fetch(`${baseUrl}/api/getPageInfo`);


    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching", pageInfo);

    return pageInfo;
}