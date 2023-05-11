<?php

namespace App\Http\Controllers;

use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;


class QrCodeController extends Controller
{
    public function generateQrCode(Request $request)
    {
        $data = 'www.outty.co';
        $renderer = new \BaconQrCode\Renderer\Image\ImagickImageBackEnd();
        $writer = new Writer($renderer);
        $qrCode = $writer->writeString($data);

        return response($qrCode)->header('Content-Type', 'image/png');
    }

    public function downloadQrCode(Request $request)
    {
        $data = "ww.wkkdkdkd.co";
        $filename = 'qr-code.png';
        $renderer = $renderer = new ImageRenderer(
            new RendererStyle(400),
            new ImagickImageBackEnd()
        );
        $writer = new Writer($renderer);
        $qrCode = $writer->writeString($data);

        dd($qrCode);

//        return Response::make($qrCode, 200, [
//            'Content-Type' => 'image/png',
//            'Content-Disposition' => 'attachment; filename=' . $filename,
//        ]);
    }
}
