import { classNames } from "@agustinmj/class-names";
import React, { Component, createRef, CSSProperties, ReactNode, RefObject } from "react";
import "./Upload.css";

type FileType = "image" | "video";

type FileTypes = "all" | FileType | string | (FileType | string)[];

interface Props {
    fileTypes?: FileTypes;
    multiple?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    onChange?: (files: File | FileList | undefined) => void;
    readonly?: boolean;
}

export class Upload extends Component<Props> {
    uploadRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

    getFileType(fileType: FileType | string): string | undefined {
        switch (fileType) {
            case "all":
                return undefined;
            case "image":
                return "image/*";
            case "video":
                return "video/*";
            default:
                return fileType;
        }
    }

    getFileTypes(fileTypes?: FileTypes): string | undefined {
        if (typeof fileTypes === "string") return this.getFileType(fileTypes);
        else return fileTypes?.map((f) => this.getFileType(f)).join(",");
    }

    handleOnChange(): void {
        const { onChange, multiple } = this.props;

        const files = (this.uploadRef.current?.files || []) as FileList;
        if (multiple) onChange?.(files);
        else if (files.length === 1) onChange?.(files[0]);
    }

    render(): JSX.Element {
        const { fileTypes, className, style, children, multiple, readonly } = this.props;

        return (
            <div
                className={classNames("upload", className, readonly && "upload-readonly")}
                onClick={readonly ? () => undefined : () => this.uploadRef?.current?.click()}
            >
                {children}
                {!readonly && (
                    <input
                        ref={this.uploadRef}
                        style={style}
                        type="file"
                        accept={this.getFileTypes(fileTypes)}
                        multiple={multiple}
                        onChange={() => this.handleOnChange()}
                    />
                )}
            </div>
        );
    }
}
