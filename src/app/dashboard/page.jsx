import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-black text-green-300 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-8">科幻控制台</h1>
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                    <p className="text-lg font-semibold mb-4">控制台信息:</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-medium">系统状态:</p>
                            <p className="text-lg">在线</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">用户登录:</p>
                            <p className="text-lg">John Doe</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">活跃会话:</p>
                            <p className="text-lg">3</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">CPU 使用率:</p>
                            <p className="text-lg">50%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
