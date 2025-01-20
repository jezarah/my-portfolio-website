"use client";

import { Alert } from "flowbite-react";
import '../blog-posts.css';

export default function CopyAlert() {
    return (
        <Alert className="alert">
            <span>Copied to Clipboard</span>
        </Alert>
    );
}