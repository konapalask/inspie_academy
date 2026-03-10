"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaPlus, FaSpinner, FaYoutube } from 'react-icons/fa';

export default function AdminDashboard() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Auth State
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authError, setAuthError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'inspire2025';
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setAuthError('');
        } else {
            setAuthError('Incorrect password. Please try again.');
        }
    };

    // Form State
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    // Extract YouTube ID from various URL formats
    const extractYouTubeId = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!url || !title || !description) {
            setError('Please fill in all fields.');
            return;
        }

        const youtubeId = extractYouTubeId(url);
        if (!youtubeId) {
            setError('Invalid YouTube URL. Please provide a valid link.');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ youtubeId, title, description }),
            });

            if (res.ok) {
                setUrl('');
                setTitle('');
                setDescription('');
                fetchVideos();
            } else {
                setError('Failed to save video to server.');
            }
        } catch (err) {
            setError('An error occurred while saving.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this video?')) return;

        try {
            const res = await fetch(`/api/videos?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setVideos(videos.filter(v => v.id !== id));
            }
        } catch (err) {
            console.error("Failed to delete video", err);
        }
    };

    const fetchVideos = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/videos');
            const data = await res.json();
            setVideos(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch videos", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchVideos();
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-slate-200"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaYoutube className="text-3xl text-primary-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
                        <p className="text-slate-500">Enter password to manage videos</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Admin Password"
                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                autoFocus
                            />
                        </div>
                        {authError && (
                            <p className="text-red-500 text-sm font-medium text-center">{authError}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary-900 text-white rounded-xl font-bold hover:bg-primary-800 transition-all shadow-lg active:scale-95"
                        >
                            Log In
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-32 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <FaYoutube className="text-4xl text-red-600" />
                    <h1 className="text-3xl font-bold text-slate-900">Video Content Manager</h1>
                </div>
                <button
                    onClick={() => setIsAuthenticated(false)}
                    className="text-slate-500 hover:text-red-600 font-medium text-sm border border-slate-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-all"
                >
                    Log Out
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* ADD VIDEO FORM */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 sticky top-24">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FaPlus className="text-accent-500" /> Add New Video
                        </h2>

                        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">{error}</div>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">YouTube URL</label>
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Video Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Master Class: NEET Physics"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="4"
                                    placeholder="Tell students what they will learn..."
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary-700 text-white rounded-lg font-bold hover:bg-primary-800 transition shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? <><FaSpinner className="animate-spin" /> Saving...</> : 'Publish Video'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* VIDEOS LIST */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 min-h-[500px]">
                        <h2 className="text-xl font-bold mb-6 border-b border-slate-100 pb-4">Live Videos List</h2>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                <FaSpinner className="animate-spin text-4xl mb-4 text-primary-500" />
                                <p>Loading videos...</p>
                            </div>
                        ) : videos.length === 0 ? (
                            <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                                <p className="text-slate-500 font-medium">No videos published yet.</p>
                                <p className="text-sm text-slate-400 mt-1">Use the form to add your first YouTube video.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {videos.map(video => (
                                    <div key={video.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-xl bg-slate-50 hover:bg-white transition group relative overflow-hidden">

                                        {/* Thumbnail placeholder */}
                                        <div className="w-full sm:w-48 aspect-video bg-black rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                                alt="Thumbnail"
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                                            />
                                        </div>

                                        <div className="flex-grow flex flex-col justify-center">
                                            <h3 className="font-bold text-lg text-slate-900 mb-1 leading-tight">{video.title}</h3>
                                            <p className="text-sm text-slate-600 line-clamp-2 mb-2">{video.description}</p>
                                            <div className="text-xs font-mono text-slate-400 mt-auto">ID: {video.youtubeId}</div>
                                        </div>

                                        <div className="flex sm:flex-col justify-end gap-2 items-end mt-4 sm:mt-0">
                                            <button
                                                onClick={() => handleDelete(video.id)}
                                                className="p-3 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg transition"
                                                title="Delete Video"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
