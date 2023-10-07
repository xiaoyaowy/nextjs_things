import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const Sidebar = () => {
    // 获取 src/pages 目录的绝对路径
    const pagesDirectory = path.join(process.cwd(), 'src', 'app');

    // 读取 src/pages 目录下的所有文件
    const pageFiles = fs.readdirSync(pagesDirectory);

    // 过滤出以 .js 结尾的文件
    const validPageFiles = pageFiles.filter(file => file.endsWith('.jsx'));

    return (
        <nav className="bg-gray-800 p-6 h-screen">
            <ul className="space-y-4">
                {validPageFiles.map(file => {
                    const pageName = file.replace(/\.jsx$/, '');
                    const pagePath = pageName === 'page' ? '/' : `/${pageName}`;
                    return (
                        <li key={pageName}>
                            <Link href={pagePath}>
                                <a className="text-white">{pageName}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Sidebar;
