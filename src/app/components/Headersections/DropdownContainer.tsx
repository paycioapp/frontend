import { cn } from "@/lib/twMerge";
import BlackOverlay from "../utils/BackOverlay";

type DropdownContainerProps = {
    children: React.ReactNode;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DropdownContainer = (props: DropdownContainerProps) => {
    return (
        <>
            <div
                className={cn(
                    "bg-white absolute cursor-default opacity-100 h-auto translate-y-0 top-full left-0 right-0 text-black z-[100000] transition-all",
                    {
                        "-translate-y-8 hidden": !props.show,
                    }
                )}
                style={{ borderTop: "1px solid #e9e9e9" }}
            >
                <div className="site-width absolute left-0 right-0 h-8 bottom-full" />
                {props.children}
            </div>
            <BlackOverlay
                show={props.show}
                onMouseEnter={() => props.setShow(false)}
            />
        </>
    );
};