import React from "react";
import { SEOHead } from "../components/SEOHead";

const DataDeletion: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Data Deletion Instructions - Techmiya Edtech"
                description="Instructions on how to request deletion of your data from Techmiya Edtech."
                canonicalUrl="https://techmiyaedtech.com/data-deletion.html"
            />
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Data Deletion Instructions
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p className="mb-4">
                        According to the Facebook Platform rules, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL.
                        If you want to delete your activities for Techmiya Edtech, you can follow these instructions:
                    </p>

                    <h2 className="text-xl font-semibold mb-3 mt-6">1. Remove App via Facebook Settings</h2>
                    <ol className="list-decimal list-inside space-y-2 mb-6 ml-2">
                        <li>Go to your Facebook Account's <strong>Settings & Privacy</strong>. Click <strong>Settings</strong>.</li>
                        <li>Look for <strong>Apps and Websites</strong> and you will see all of the apps and websites you linked with your Facebook.</li>
                        <li>Search and Click <strong>Techmiya Edtech</strong> in the search bar.</li>
                        <li>Scroll and click <strong>Remove</strong>.</li>
                        <li>Congratulations, you have successfully removed your app activities.</li>
                    </ol>

                    <h2 className="text-xl font-semibold mb-3 mt-6">2. Request Manual Data Deletion</h2>
                    <p className="mb-2">
                        If you wish to have all your data permanently deleted from our servers, please follow these steps:
                    </p>
                    <p className="p-4 bg-gray-50 rounded-md border border-gray-200">
                        Email us at: <strong><a href="mailto:techmiya.md@gmail.com" className="text-blue-600 hover:underline">techmiya.md@gmail.com</a></strong><br />
                        Subject: <strong>"Data Deletion Request – n8n-auto"</strong><br />
                        <br />
                        We will process your request and delete your data within <strong>7 working days</strong>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default DataDeletion;
