'use client'

import styles from "./search.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const hanleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("q", e.target.value)
        replace(`${pathname}?${params}`)
    }
    return (
        <div className="search" >
            <input type="text" placeholder="Serch Food" name="value"
                onChange={hanleSearch}
                className={styles.input} />
        </div>
    )
}
