import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

function getDataFilePath() {
    return path.join(process.cwd(), 'src', 'data', 'videos.json');
}

export async function GET() {
    try {
        const filePath = getDataFilePath();
        if (!fs.existsSync(filePath)) {
            return NextResponse.json([]);
        }
        const data = fs.readFileSync(filePath, 'utf8');
        const videos = JSON.parse(data);
        return NextResponse.json(videos);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const newVideo = await request.json();
        const filePath = getDataFilePath();

        let videos = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            videos = JSON.parse(data);
        }

        const videoToAdd = {
            id: Date.now().toString(),
            youtubeId: newVideo.youtubeId,
            title: newVideo.title,
            description: newVideo.description,
            createdAt: new Date().toISOString()
        };

        videos.unshift(videoToAdd);
        fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));

        return NextResponse.json({ success: true, video: videoToAdd }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
        }

        const filePath = getDataFilePath();
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'No data file found' }, { status: 404 });
        }

        const data = fs.readFileSync(filePath, 'utf8');
        let videos = JSON.parse(data);

        videos = videos.filter(v => v.id !== id);
        fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
    }
}
