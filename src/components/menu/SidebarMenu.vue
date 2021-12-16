<script setup lang="ts">


</script>

<template>
    <aside class="sidebar">
        <nav>
            <ul class="sidebar__nav">
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">ร้านค้าทั้งหมด</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 12H14V10H16V12H18V14H16V16H14V14H12V12M22 8V18C22 19.11 21.11 20 20 20H4C2.89 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.11 6 22 6.89 22 8M20 8H4V18H20V8Z"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">สร้างคูปองใหม่</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M13.04 10C12.64 10.25 12.26 10.55 11.9 10.9C11.57 11.24 11.27 11.61 11.03 12H8V10.5C8 10.22 8.22 10 8.5 10H13.04M20 8H2V2H20V8M18 4H4V6H18V4M5 18V9H3V20H11.82C11.24 19.4 10.8 18.72 10.5 18H5M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">ค้นหาคูปอง</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M14.8 8L16 9.2L9.2 16L8 14.8L14.8 8M4 4H20C21.11 4 22 4.89 22 6V10C20.9 10 20 10.9 20 12C20 13.11 20.9 14 22 14V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V14C3.11 14 4 13.11 4 12C4 10.9 3.11 10 2 10V6C2 4.89 2.9 4 4 4M4 6V8.54C5.24 9.26 6 10.57 6 12C6 13.43 5.24 14.75 4 15.46V18H20V15.46C18.76 14.75 18 13.43 18 12C18 10.57 18.76 9.26 20 8.54V6H4M9.5 8C10.33 8 11 8.67 11 9.5C11 10.33 10.33 11 9.5 11C8.67 11 8 10.33 8 9.5C8 8.67 8.67 8 9.5 8M14.5 13C15.33 13 16 13.67 16 14.5C16 15.33 15.33 16 14.5 16C13.67 16 13 15.33 13 14.5C13 13.67 13.67 13 14.5 13Z"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">จัดการคูปอง</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">ประวัติการใช้งานคูปอง</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__nav__link">
                        <i>
                            <svg width="40px" height="40px" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                                />
                            </svg>
                        </i>
                        <span class="sidebar__nav__text">ออกจากระบบ</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.end {
    display: fixed;
}

.sidebar {
    background-color: #0c2d48;
    position: fixed;
    transition: width 0.2s ease;
}
.sidebar nav {
    height: 100%;
}

.sidebar .sidebar__nav .sidebar__nav__link {
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    color: #b1d4e0;
    display: flex;
    padding-left: 20px;
    text-decoration: none;
    transition: color 0.2s ease, background-color 0.2s ease;
}

.sidebar .sidebar__nav .sidebar__nav__link:hover {
    background-color: #145da0;
    color: rgb(230, 230, 230);
}

.sidebar .sidebar__nav .sidebar__nav__text {
    display: none;
    margin-left: 10px;
    margin-right: auto;
    white-space: nowrap;
}

.sidebar .sidebar__nav i {
    align-items: center;
    display: flex;
    justify-content: center;
}

.sidebar {
    height: 100vh;
    left: 0;
    width: var(--sidebar-width);
}

.sidebar:hover {
    width: 16rem;
}

.sidebar .sidebar__nav {
    flex-direction: column;
}

.sidebar .sidebar__nav li:last-child {
    margin-top: auto;
}

.sidebar .sidebar__nav .sidebar__nav__link {
    padding: 1em;
}

.sidebar:hover .sidebar__nav .sidebar__nav__text {
    display: inline;
}

.sidebar .sidebar__nav i {
    font-size: 2.5rem;
}
</style>