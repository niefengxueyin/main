<?php
    Response::macro('xml', function ($vars, $status = 200, array $header = array(), $rootElement = 'response', $xml = null) {

        if (is_object($vars) && $vars instanceof Illuminate\Support\Contracts\ArrayableInterface) {
            $vars = $vars->toArray();
        }

        if (is_null($xml)) {
            $xml = new SimpleXMLElement( '<' . $rootElement . '/>' );
        }
        foreach ($vars as $key => $value) {
            if (is_array($value)) {
                if (is_numeric($key)) {
                    Response::xml($value, $status, $header, $rootElement, $xml->addChild(str_singular($xml->getName())));
                } else {
                    Response::xml($value, $status, $header, $rootElement, $xml->addChild($key));
                }
            } else {
                $xml->addChild($key, $value);
            }
        }
        if (empty( $header )) {
            $header[ 'Content-Type' ] = 'application/xml';
        }

        return Response::make($xml->asXML(), $status, $header);
    });


