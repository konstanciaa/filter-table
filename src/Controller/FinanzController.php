<?php

namespace App\Controller;

use App\Entity\Finanzbuchhaltung;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class FinanzController extends AbstractController
{
    #[Route('/api/finanz', name: 'api_finanz', methods: ['GET'])]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $type = $request->query->get('vorgangsart');

        $repository = $entityManager->getRepository(Finanzbuchhaltung::class);
        if ($type) {
            $finanz = $repository->findBy(['vorgangsart' => $type]);
        } else {
            $finanz = $repository->findAll();
        }

        $data = [];
        foreach ($finanz as $fin) {
            $data[] = [
                'id' => $fin->getId(),
                'nummer' => $fin->getNummer(),
                'vorgangsart' => $fin->getVorgangsart(),
                'betreff' => $fin->getBetreff(),
                'kunde' => $fin->getKunde(),
                'betrag' => $fin->getBetrag(),
            ];
        }

        return new JsonResponse($data);
    }
}
