// src/layout/MainLayout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // Правильный импорт

function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Header />
            <main className="flex-grow"> {/* Добавьте flex-grow для правильного отображения на весь экран */}
                <Outlet /> {/* <-- ЭТО ПРАВИЛЬНО */}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;