<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MainResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this['data'],
            'message' => $this['message'],
            'status' => $this['status']
        ];
    }

    public function withResponse($request, $response)
    {
        $response->setStatusCode($this['status']);
    }
}
