<?php
namespace App\Tests\Repository;

use App\Entity\User;
use App\Entity\Command;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserRepositoryTest extends KernelTestCase
{
     /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    protected function setUp(): void
    {
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    public function testSearchByEmail()
    {
        $user = $this->entityManager
        ->getRepository(User::class)
        ->findOneBy(['email' => 'test@test.com']);

        $this->assertSame("test", $user->getUsername());
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}