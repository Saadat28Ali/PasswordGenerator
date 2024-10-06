// React imports
import { useState } from "react";

// File imports
import "./PassGen.css";
import useGeneratePass from "../../hooks/useGeneratePass";

export default function PassGen() {

    const [length, setLength] = useState<number>(10);
    interface charAllowedInter {
        lowerAlpha: boolean, 
        upperAlpha: boolean, 
        num: boolean, 
        special: boolean
    }
    const [charAllowed, setCharAllowed] = 
    useState<charAllowedInter>(
        {lowerAlpha: true, upperAlpha: true,  num: true, special: true}
    );

    function handleSubmit(
        length: number, 
        allowedChar: charAllowedInter, 
        outputTextarea: HTMLTextAreaElement
    ) {
        console.log(`Password Generation Request: 
        Length: ${length}, 
        Lowercase Alphabets Allowed: ${allowedChar.lowerAlpha}, 
        Uppercase Alphabets Allowed: ${allowedChar.upperAlpha}, 
        Numbers allowed: ${allowedChar.num}, 
        Special chars allowed: ${allowedChar.special}
        Output textarea: ${outputTextarea}`);

        outputTextarea.value = useGeneratePass(length, allowedChar);
    }

    return (
        <div
        className="
        PassGen
        w-full
        flex
        flex-col
        items-center
        ">
            <form id="passGenForm" 
            onSubmit={(event: any) => {
                event.preventDefault();
                handleSubmit(
                    event.target.children[0].children[1].value, 
                    charAllowed, 
                    event.target.children[4].children[0]
                );
            }}
            className="
            bg-neutral-700
            p-5
            rounded-md
            min-w-96
            ">
                <div id="passLengthInput"
                className="
                flex
                justify-evenly
                h-10
                "
                >
                    <label
                    className="
                    flex
                    flex-col
                    justify-center
                    mr-4
                    "
                    > Length:  </label>
                    <input type="range" id="lengthRange"
                    min={1} max={20} step={1} defaultValue={10}
                    onChange={(event: any) => {
                        setLength(event.target.value)
                    }}
                    className="
                    mr-4
                    transition-all
                    "/>
                    <label
                    className="
                        bg-white
                        text-neutral-800
                        py-2
                        px-3
                        rounded-sm
                        w-11
                        flex
                        justify-center
                        transition-all
                    "
                    > {length} </label>
                </div>
                <hr
                className="
                my-6
                border-[rgba(255,255,255,0.2)]
                " />
                <div id="charAllowedInput"
                className="
                h-30
                ">
                    <div className="flex">
                        <input id="allowLowerAlpha" type="checkbox" defaultChecked
                        onClick={(event: any) => {
                            setCharAllowed((oldCharAllowed: any) => {
                                let newCharAllowed: any = {...oldCharAllowed};
                                newCharAllowed.lowerAlpha = event.target.checked;
                                return newCharAllowed;
                            });
                        }}
                        className="
                        mx-5
                        "
                        /> 
                        <label htmlFor="allowAlpha"> Lowercase alphabets </label>                
                    </div>

                    <div className="flex">
                        <input id="allowUpperAlpha" type="checkbox" defaultChecked
                        onClick={(event: any) => {
                            setCharAllowed((oldCharAllowed: any) => {
                                let newCharAllowed: any = {...oldCharAllowed};
                                newCharAllowed.upperAlpha = event.target.checked;
                                return newCharAllowed;
                            });
                        }}
                        className="
                        mx-5
                        "
                        /> 
                        <label htmlFor="allowAlpha"> Uppercase alphabets </label>                
                    </div>
                    
                    <div className="flex">
                        <input id="allowNum" type="checkbox" defaultChecked
                        onClick={(event: any) => {
                            setCharAllowed((oldCharAllowed: any) => {
                                let newCharAllowed: any = {...oldCharAllowed};
                                newCharAllowed.num = event.target.checked;
                                return newCharAllowed;
                            });
                        }}
                        className="
                        mx-5
                        "
                        />
                        <label htmlFor="allowNum"> Numbers </label>
                    </div>

                    <div className="flex">
                        <input id="allowSpecial" type="checkbox" defaultChecked
                        onClick={(event: any) => {
                            setCharAllowed((oldCharAllowed: any) => {
                                let newCharAllowed: any = {...oldCharAllowed};
                                newCharAllowed.special = event.target.checked;
                                return newCharAllowed;
                            });
                        }}
                        className="
                        mx-5
                        "
                        />
                        <label htmlFor="allowSpecial"> Special Characters </label>
                    </div>

                </div>
                <hr
                className="
                my-6
                border-[rgba(255,255,255,0.2)]
                " />

                <div id="resultAndSubmit"
                className="
                h-16
                flex
                items-center
                justify-center
                ">
                    <textarea
                    className="
                    font-mono
                    text-sm
                    w-48
                    h-14
                    p-2
                    text-neutral-800
                    overflow-y-scroll
                    rounded-l-md
                    resize-none
                    focus:outline-none
                    disabled:bg-white
                    "
                    disabled />
                    <button id="submitButton" type="submit" 
                    disabled={!(
                        charAllowed.lowerAlpha
                        || charAllowed.upperAlpha 
                        || charAllowed.num 
                        || charAllowed.special
                    )}
                    className="
                    bg-sky-400
                    text-white
                    p-4
                    rounded-r-md
                    disabled:bg-neutral-500
                    hover:bg-white
                    hover:text-sky-400
                    transition-colors
                    ">
                        Generate
                    </button>
                </div>

                <div id="inputError"
                className="
                mt-4
                ">
                    {(
                        charAllowed.lowerAlpha 
                        || charAllowed.upperAlpha 
                        || charAllowed.num 
                        || charAllowed.special
                    ) ? (
                        <label
                        className="text-sm opacity-0">
                            At least one character type must be allowed
                            to generate a password
                        </label>
                    ) : (
                    <label
                    className="
                    text-sm
                    text-red-500
                    underline
                    "
                    >
                        At least one character type must be allowed
                        to generate a password
                    </label>
                    )}
                    
                    {/* {charAllowed.alpha.toString()}
                    {charAllowed.num.toString()}
                    {charAllowed.special.toString()} */}
                </div>
            </form>
        </div>
    );
}
