import React, { createContext, useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext({})

const ITEMS = [
    {
        id: "10001",
        title: "Ultrakunst",
        artist: "Brutalismus 3000",
        price: "31.99",
        description: "With the release of ‘ULTRAKUNST‘, the duo has highlighted their “nu-gabber-post-techno-punk” style, whilst creating some of their hardest and most notable sounds to take over dancefloors. ‘ULTRAKUNST’ is indeed ultra-art.",
        size: "12\"",
        genre: "Electronic",
        url: "https://lh3.googleusercontent.com/xoahn4mHnQWW8w1FPE9HZNSHFGgsf-ALYIORJmu5wIapfGcD0FzOr5R09D4qNy0f3TvlGODm09Yu2CzH5zhJepknoH4HVr0BhnwGki_WhC2Ebksrzbwyu87dkQoCVv_jXZmPSVXnG6l7naWNUyR-y-l6mhHcAIMkL_VqLouqMPjCR9D6wbsrSiYWrOibAsXUc4a9uJZXxWogGjyB4ftWeVRiFG4BZTumoN-QclzEjnmm4R9WDw77hPGl4QPNwV6n5LizctbYquNQWcteapLvxtSIvOrK4pcGVS4DscVEkPOAsuTlXXpM4-S7hYcqGUqvfWl9mgVwXJ4sgdx2GkJzWh99GN4RgbQktcn-3pWX0uYy0TnqTde2rhuECe8tkh5Etj3WnW_kasksPVSWyflfFq-CnSi0uQ3qzD7bKLtBiU-jJzP5fATWKU1brLIalmfbTanLYAajP0MM8REIdtkaVAgmI8KfoMY_eg2IQdlDCKa8FUtMDf8_Ncxp_hfWTBPQRnVlBHILR29_FLd45HR8479kOsTbBbuJfp5WxuAIHPMKnUU62vmlBJFUdLlp1PihlQ-v31fzOOE3AvBoNbA3YOYgkqaKzg8KiIpHhWYo671jf7dnti5_lNHfcvf_cEfPNJFrTzpHiwjOnbUdcFOUJj3ZccubDU8ApIG8te1XBHwWlGu377iZuQZfnj_7GsXczc_yYLDLODAYfHaoCYGKB4LK2Zhvgfl6FOnCqfOAHeKJXv9xYuAYNKHZM14nCLlX4M8ZXTJ2rJf9yCc1r8v0EsBye8KXGqJbqvMHzitU3sdX97vRqayzmJkPCmjZ41Fqzyrh_IsBPAtXAikaYPlI2LoveZaSdJe88MFuhGGcAz3RICMh6yLCp8IB34YcKKQgYyNF3vhkbH8WyrFZzA2Iy7iXkWsTGwC1wM8eRxTA3vtPDzYL=w939-h939-s-no?authuser=0"
    },
    {
        id: "10002",
        title: "Calendar",
        artist: "Motorama",
        price: "19.99",
        description: "Vigorously mixing the aesthetics of new wave and post punk and infused with intelligently buoyant flair their songs are also full of dreamy pop tunes danceable beats and monotone vocals.",
        size: "12\"",
        genre: "Alternative",
        url: "https://lh3.googleusercontent.com/F7W6N2KeCyIEG_ZuioqgEle1VCBrXE_wMBPmKxq2sB1CfcuZXqp6k3R02zqnJ6w-nO1nqF7IQtzjH7cYP1jskLBwuQTWzl0NEF9W1DnselfPmvNH6fOTMTlz4nYr2zI5OcA_ID658apGr-sBELJBzbo8SAjqyc_iMkx5wBFdcEvrJ4uJSaZzKQk8RbTtcm7_yIvRod6w-CPsPONm78yeVL5ZsERq_BBty_o2G7nMpCfdIjJ8fSiXjsRq_BfGL0YHDLheC--OC6mvcbAycaH_q1Wfi_42g0M0c4zlAb572riV_o8DvTpBPHgHGDqn8G6zqrauhA8aEdWapoCsQfElTxBhWwwlNl9wNlGSBi6a6t8fg4Qy6t5xSXRN8obq3e6Qm1-u0gmmn2P07uvvhgRgMM3lNq6AGaNhiGTwU9Ql01ZvAu7ytUhiOs-417f70wX7Lw7RsYtb2xkrjhCTD5JPuE-APqSin70Dtc2O_O11JwvgZdwfg_531AZCvsgqGQPPMYqH7dZsHAlWxY4VGQiMrNjbAJMaGiD7v1w2SIHmCZ5ccYucNZnU7oPRqZAQ_5Gn-xMLlY9CGFatXAqf-N1cmMVAosfo8HIFMzlZZm9F3TTuG6Nlyvm26ps5OY23DDrVcNRq7d41pMdwICquU7dZ56q9V8BcXhcuxcjlvjw0kpOWe_fq102SuIFKMldnDPnHWD36oseqvGXB37zsvh2g-BYyryBOvkcC0Hk2AKWXxjjbdgV1PIGyd-ruze4c2r2y5JkGpCg3fA5GgNPoYH9i915KcsnulBC7Ju1sMK1hG5LX075RPx3LgTWNKk115McugmDn574zrU423WOjY5KJ7c-IDAydjurp7-Ab6vPF3CNhJ_h7Km2z5jRzSD7rDxPwiV5r9jw43M5O6JqvWvlxAfFK_-_yXSPmH9YA7KM1hKs1iwTC=w939-h939-s-no?authuser=0"
    },
    {
        id: "10003",
        title: "Auto-Pain",
        artist: "Deeper",
        price: "34.99",
        description: "Despite the amplified bleak lyrical content, Auto-Pain is a triumphant album. Its spring-loaded, skeletal guitar riffs matched with Gohl’s in-your-face speak-singing feel tremendously cathartic, as if this is how they chose to channel their grief.",
        size: "12\"",
        genre: "Rock",
        url: "https://lh3.googleusercontent.com/YfdjOGychTVVR5x4uSMkI8ZHaOEajaxyBXabtPJSYGBf93vaL2ZDV7J_11UDT1cNdFQGIXhOd0OEWJAwXal3QHweBV-_tOoDjCdCDtMJFIEGMeOOHBH6Pe3-HgopDZFqxScfk7Zkj3T7R1Xw-aURuoJKYF-aJmM-NZH3IO4O5--JmeTkYF-_FDhCXmXYGfmJ1JnjvgReZacg9POgAJgQUfwJjoPZ-IPzRRWpko8H-i31CdfSnpLrmJrt8npcGc7eLrSqXOhhlNEeWOe5tY7_iVRVrBbZ4PHaOMXuDo6ii6lcVkW8c7T2rN7C4km4AvLCeVurjrmJWT8j2gqU6ptNGjCvQiNNrcXZJx10lrjqjGU0fZ_Fb-BfoKIulnCKRgrliLwRebwCYlB_1LBlEMU_9VNhBEp8SQZuaYynC5ReXSuTn08o5l_7GAk1RSaZYpbkyG75rBWmdau_lJljj2rRmd-qTmyf_jI76AcnsxVO5cZ9pMXva8PF6gJeLRytm5D-sUbkpFzYW_Yz8plD0TQohSrXXFziNL1Ua5JvSaZfFoUv8OqsPy2PQAINPV96FAMHPF-CSlmn-h2X8Uif_qk6lQxr5hT5svwQKTnUxiOJm-lM4thFVoyW_pSj7WA24emnrO_f2KGOeE1k9zEbXsCMnNgfLR2OixcyK2FBUdnU7nc4iIxrz-_ZyxXzmKkJUCgzCR1ywVz7PT68uDpSTCByf0It-wv7ig1jN9OakxaHi4Pzym2wQeUkbUxsCNHtjCJUqN83aAqcXmFNNifqDnQdHSns9IJCfY2u4st2wFiPXny_6li9_jzJyUemGLMBsFaLZRTwU9pwDnmEjMMjUv3K66yyGEnwGY1-EHbKvesEYw76Ruu8fIeD29pvldXz-jjuVEeW0XdUKjLPj6MBEHkwsPBjJe8XRgE9zZaNKRzaC6adJTnP=w939-h939-s-no?authuser=0"
    },
    {
        id: "10004",
        title: "Rezzett LP",
        artist: "Rezzett",
        price: "39.99",
        description: "Rezzett's debut album is dark and ethereal. A sound almost indescribable.",
        size: "12\"",
        genre: "Electronic",
        url: "https://lh3.googleusercontent.com/j7cOlIjbQgZ8mj1YkanJjeo50hPeGcroPlA7f97x4iehcv1ECaToWTBdlg3cqtCpqzH__bVO_NDIaJaktmhNPm3dHvNh_8l7LXRpbVWEGnDNMR-azcjPiikgZlF0_th0VjuUfyFr8KKixXGDbNCvF3GhGnU4dYgTgzR7oL2_avJv4UR0_SvsCaJ7S_QxAcds7r7jQEgI54KwjT0it_1LUzyceG5P9y-H3he9iY3YaVoTUtVBaJ191tCj7OgRxyshUQFwUom4P_gTcTIWwxsM45dcXbZLF-rVK5i7tGHeO8x-jzQGNJfBsLU92_JFDfkFTgMv88eDbp0JRgBUknpNMAtAGHtraTB3kLXDDDVUDCgRMOIF9-xLGZ8HN34KmvP14IkCj8CDMXRuCCFuph1hgeecsRhm98jRJJAn78KSMhFshUfON-1fx1zFu_bNznpPUbQbFuDOqIDnQ-PtbhelDlqVj0iJ1_DuANSAUyqisp7panTdA3BWDPmynspb-sqjkOAC-gx6gES6b7gmjfbvb97DOymA55Bvk-7b3PpMsi0-mM7edUswxKI43wE9d0Es-GJS60Ty91RqT-CR0b5RrxEUxumJafSqUquuZBRHhVtX_qgFNjjlo1C3-qNfJSDqoLrGc3DPLrUv-EXDyRFBUYGioC7NLpEXItWUpDLGMwpCiHgoU0gN4XdICQ8LQozS_-a80HT-fffvx1vcQFwZ0AvSuKQVweQclXhIdR_VsARyaVFgxDSI2YI_haCsyXNCICwTJkdkRfDCxZTcG_s52U9IcPysr3_srJBZcHK4LV_YX9tffHO0q1tb8gFeDwYYQxCZflM9Mqrij_9HqUDVbzhXalWQtlTOpIJhTiVIwzVbYUVf68U4MAVaRMOKYl1xUCtiJ0cguRZ_c8PLJB12YDMGu__g35j0Ha_H0aOGGhC-1iZN=w939-h939-s-no?authuser=0"
    },
    {
        id: "10005",
        title: "Getz/Gilberto",
        artist: "Stan Getz + Joao Gilberto",
        price: "27.95",
        description: "Getz/Gilberto is an album by American saxophonist Stan Getz and Brazilian guitarist João Gilberto, featuring pianist and composer Antônio Carlos Jobim (Tom Jobim), who also composed many of the tracks. It was released in March 1964 by Verve Records.",
        size: "12\"",
        genre: "Jazz / Bossa-Nova",
        url: "https://lh3.googleusercontent.com/x0JmG-AnUfOARrqQSVBmPVPc3gN6odqlwDav0vowfxnCC6sitOnI-9Ik44TGeVQPBetbTqk4Syw2U3juF6Y3GAdTHlwWcYKuQrjaoZRBXlm489TXzqoruPuj6PM9EmBvdbaWkCdNptjFm8TkQYaJO6dt9osZRM5_dCsfn58M--RauWTkyfvjJeD7EUUgyAumEdJdfMnr51QHo30Q6QESKWJu45iwKw1B0ev2fS-rJRVToHrxXHi8ZMonVgVdhetwwZqOdUtHHNv-LMJlYr-DEwIq69kG1OG_nNVkAr2o8Z-3jgXgjiFlUK0TYuj5VOdu97YKhMfVPY03FiLJG2YwJQQ1F8kX-PWeax1dRf-cioTPFBQNiXf60XsP1Imtsn_iKiT8WeXeNvlVLTNqjhvoTt_jZwGiNh9vp48nP6LvjM28O0dGxG-FTDsn8F8eeV18jpRud_ERxqKrwKqCrYeX3uvmC2pdascsZAt6DrgyZq-JmzcY7LqjD-E4zjNzENa4fKCxKPN4muLPJlQIibN-JXFdiIRxEvtBqzRgUcOjLVf-TBimW0NSAWgtqvmgsNhVtzoo3kHY0tw1ZElaLT0Nhrz0cMHwgtVxu5nS64OWI43_gVWtE_kB_5kIeVgJqWNPGX9yRvLV8WuV_VcLJEzG6lPzASb8yG48R9ZD5R9ZtMuJLek3X4R-SzsgmQKi6xj_achlwIWpJNaPDq9_NrP2K3gZ3ycHThu6BFBdQCBfF3aLkxGJttBlt_FWetlpuyhw4P3mIeLUzk74jyqb55Ga8yCsPGtCnIvUO20JN7jSfDm1hvyQDNBtuE6TsW4NS81DrKLT-eFyVK3VmoL8Pv2OjgvpVDH2v0BdGMN3VAaeLv3hV4PZDGYqB3Upz4DORXyw8oNcq8M6Y3-hzc8Q-UQpkkzfK_GTGaiRHjjGn_VBMcyctTL4=w939-h939-s-no?authuser=0"
    },
]

const COUPONS = [
    {
        title: "SAVE30",
        amount: .30  
    }
]

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [items] = useState(ITEMS)

    const addedToCart = () => toast('Added to cart.');
    const removedFromCart = () => toast('Removed from cart.');
    const couponApplied = () => toast('Coupon applied.');

    const getItem = async (id) => {
        console.log(id)
        for (const item of ITEMS) {
            if (item.id == id) {
                return item
            }
        }
        return false
    }

    const addToCart = async (item) => {
        var temp = cart
        temp.push(item)
        setCart(temp)
        getTotal()
        addedToCart()
    }

    const removeFromCart = (index) => {
        var temp = cart
        temp.splice(index,1)
        setCart(temp)
        getTotal()
        removedFromCart()
    }

    const getTotal = () => {
        var total = 0.0
        for (const item of cart) {
            total += +(item.price)
        }
        setTotal(total)
    }

    const applyCoupon = (title) => {
        console.log(title)
        for (const item of COUPONS) {
            if (item.title == title) {
                setTotal(total * 1 - item.amount)
                couponApplied()
            }
        }
    }

    console.log(items)

    return (
        <CartContext.Provider value={{cart, items, getItem, setCart, addToCart, removeFromCart, getTotal, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default function useCart() {
    return useContext(CartContext);
}