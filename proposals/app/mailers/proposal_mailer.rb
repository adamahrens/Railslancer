class ProposalMailer < ApplicationMailer
  def generate_proposal_email(proposal)
    @proposal = proposal
    mail(to: @proposal.client_email, subject: 'New Proposal has been added')
  end
end
