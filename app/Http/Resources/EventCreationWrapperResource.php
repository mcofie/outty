<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventCreationWrapperResource extends JsonResource
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
            "event" => new EventResource($this[0]),
            "amount" => $this[1]['amount'],
            "payment_url" => $this[1]['payment_url']
        ];
    }
}
