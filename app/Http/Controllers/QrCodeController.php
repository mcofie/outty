<?php

namespace App\Http\Controllers;

use BaconQrCode\Writer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;
use SimpleSoftwareIO\QrCode\Facades\QrCode;


class QrCodeController extends Controller
{
    public function generateQrCode(Request $request)
    {

        $pdf = App::make('dompdf.wrapper');
        $data = [
            'title' => 'Example PDF',
            'content' => 'This is an example PDF generated in Laravel using Dompdf',
            'qrcode' => QrCode::generate('Welcome to Makitweb')
        ];

        $pdf->loadView('payment', $data)->setPaper('a6', 'portrait');
        return $pdf->stream();

    }

    public function downloadQrCode($data)
    {
        $qrCode = QrCode::format('svg')->size(200)->generate(env('APP_URL') . $data);
        $response = Response::make($qrCode, 200);
        $response->header('Content-Type', 'image/svg');
        $response->header('Content-Disposition', 'attachment; filename=' . $data . '.svg"');
        return $response;
    }
}
